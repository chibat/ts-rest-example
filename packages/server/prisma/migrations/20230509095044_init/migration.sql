-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT,
    "description" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "tags" TEXT[],
    "image" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
