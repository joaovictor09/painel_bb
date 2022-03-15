/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `clients_plans` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "clients_plans_name_key" ON "clients_plans"("name");
