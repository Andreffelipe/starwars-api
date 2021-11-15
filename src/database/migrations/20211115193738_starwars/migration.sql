-- CreateTable
CREATE TABLE "Characters" (
    "id" TEXT NOT NULL,
    "name" CHAR(25) NOT NULL,
    "height" SMALLINT NOT NULL,
    "mass" DOUBLE PRECISION NOT NULL,
    "hair_color" TEXT[],
    "skin_color" TEXT[],
    "eye_color" TEXT[],
    "birth_year" CHAR(10) NOT NULL,
    "gender" CHAR(15) NOT NULL,
    "homeworldId" TEXT NOT NULL,
    "speciesId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Characters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Planet" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rotation_period" SMALLINT NOT NULL,
    "orbital_period" SMALLINT NOT NULL,
    "diameter" INTEGER NOT NULL,
    "climate" TEXT[],
    "gravity" VARCHAR NOT NULL,
    "terrain" TEXT[],
    "surface_water" DOUBLE PRECISION NOT NULL,
    "population" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Planet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Species" (
    "id" TEXT NOT NULL,
    "name" CHAR(25) NOT NULL,
    "classification" CHAR(10) NOT NULL,
    "designation" CHAR(10) NOT NULL,
    "average_height" SMALLINT NOT NULL,
    "skin_colors" TEXT[],
    "hair_colors" TEXT[],
    "eye_colors" TEXT[],
    "average_lifespan" INTEGER NOT NULL,
    "language" CHAR(15) NOT NULL,
    "homeworld_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Species_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Starships" (
    "id" TEXT NOT NULL,
    "name" CHAR(30) NOT NULL,
    "model" CHAR(50) NOT NULL,
    "manufacturer" CHAR(70) NOT NULL,
    "cost_in_credits" INTEGER NOT NULL,
    "length" DOUBLE PRECISION NOT NULL,
    "max_atmosphere_speed" SMALLINT NOT NULL,
    "crew" INTEGER NOT NULL,
    "passengers" INTEGER NOT NULL,
    "cargo_capacity" INTEGER NOT NULL,
    "consumables" CHAR(10) NOT NULL,
    "hyperdrive_rating" DOUBLE PRECISION NOT NULL,
    "MGLT" SMALLINT NOT NULL,
    "starship_class" CHAR(45) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Starships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" TEXT NOT NULL,
    "name" CHAR(35) NOT NULL,
    "model" CHAR(45) NOT NULL,
    "manufacturer" CHAR(60) NOT NULL,
    "cost_in_credits" INTEGER NOT NULL,
    "length" DOUBLE PRECISION NOT NULL,
    "max_atmosphere_speed" INTEGER NOT NULL,
    "crew" SMALLINT NOT NULL,
    "passengers" SMALLINT NOT NULL,
    "cargo_capacity" INTEGER NOT NULL,
    "consumables" CHAR(20) NOT NULL,
    "vehicle_class" CHAR(30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" CHAR(30) NOT NULL,
    "api_key" TEXT NOT NULL,
    "permissions" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserOnRoles" (
    "roles_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserOnRoles_pkey" PRIMARY KEY ("roles_id","user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Characters_name_key" ON "Characters"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Planet_name_key" ON "Planet"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Species_name_key" ON "Species"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Starships_name_key" ON "Starships"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_name_key" ON "Vehicle"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_api_key_key" ON "User"("api_key");

-- CreateIndex
CREATE UNIQUE INDEX "Roles_name_key" ON "Roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Roles_description_key" ON "Roles"("description");

-- AddForeignKey
ALTER TABLE "Characters" ADD CONSTRAINT "Characters_homeworldId_fkey" FOREIGN KEY ("homeworldId") REFERENCES "Planet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Characters" ADD CONSTRAINT "Characters_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Species" ADD CONSTRAINT "Species_homeworld_id_fkey" FOREIGN KEY ("homeworld_id") REFERENCES "Planet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnRoles" ADD CONSTRAINT "UserOnRoles_roles_id_fkey" FOREIGN KEY ("roles_id") REFERENCES "Roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnRoles" ADD CONSTRAINT "UserOnRoles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
