/*
  Warnings:

  - A unique constraint covering the columns `[company_name]` on the table `clients` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `service_id` to the `clients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clients" ADD COLUMN     "service_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "clients_company_name_key" ON "clients"("company_name");

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "plans_service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
