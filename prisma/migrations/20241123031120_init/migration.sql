-- CreateTable
CREATE TABLE "ContactUs" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactUs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Survey" (
    "id" TEXT NOT NULL,
    "q1" TEXT[],
    "q1Other" TEXT,
    "q2" TEXT NOT NULL,
    "q3State" TEXT NOT NULL,
    "q3City" TEXT NOT NULL,
    "q4" TEXT,
    "q5" TEXT,
    "q6" TEXT[],
    "q6Other" TEXT,
    "q7" TEXT,
    "q8" TEXT,
    "q9" TEXT,
    "q10" TEXT[],
    "q10Other" TEXT,
    "q11" TEXT[],
    "q12" TEXT,
    "q12Explain" TEXT,
    "q13" TEXT,
    "q14" TEXT,
    "q14Explain" TEXT,
    "q15" TEXT,
    "q16" TEXT[],
    "q16Other" TEXT,
    "q17" TEXT,
    "q17Explain" TEXT,
    "q18" TEXT,
    "q19" TEXT,
    "q19Explain" TEXT,
    "q20" TEXT,
    "q21" TEXT[],
    "q21Other" TEXT,
    "q22" TEXT[],
    "q23" TEXT[],
    "q23Other" TEXT,
    "q24" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Survey_pkey" PRIMARY KEY ("id")
);
