/*
  Warnings:

  - Made the column `plan_id` on table `clients` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "clients" DROP CONSTRAINT "clients_plan_id_fkey";

-- AlterTable
ALTER TABLE "clients" ALTER COLUMN "plan_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "clients_plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
