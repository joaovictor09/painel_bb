-- AlterTable
ALTER TABLE "clients" ALTER COLUMN "plan_id" DROP NOT NULL;

-- CreateTable
CREATE TABLE "clients_plans" (
    "id" TEXT NOT NULL,
    "plan_type" TEXT NOT NULL,
    "plan_service" TEXT NOT NULL,

    CONSTRAINT "clients_plans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plans_type" (
    "id" TEXT NOT NULL,
    "plan" TEXT NOT NULL,

    CONSTRAINT "plans_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plans_service" (
    "id" TEXT NOT NULL,
    "service" TEXT NOT NULL,

    CONSTRAINT "plans_service_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "clients_plans"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients_plans" ADD CONSTRAINT "clients_plans_plan_type_fkey" FOREIGN KEY ("plan_type") REFERENCES "plans_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients_plans" ADD CONSTRAINT "clients_plans_plan_service_fkey" FOREIGN KEY ("plan_service") REFERENCES "plans_service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
