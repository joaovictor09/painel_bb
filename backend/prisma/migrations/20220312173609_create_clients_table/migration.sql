-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "client_name" TEXT NOT NULL,
    "celphone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tax" DECIMAL(65,30) NOT NULL,
    "plan_id" TEXT NOT NULL,
    "segment_id" TEXT NOT NULL,
    "technician_id" TEXT,
    "seller_id" TEXT NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);
