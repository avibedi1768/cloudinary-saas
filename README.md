This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# AI powered SAAS

can accept any type: image, video and convert to desired format like linkedin banner, insta post, etc

## installed:

npm i -D daisyui@latest
daisy UI for CSS
used component: drawer (for navbar)

npm install @clerk/nextjs
clerk for signup, signin, or by using gmail
-> create application on clerk. add the keys to .env.local. choose the needed auths like gmail, email, phone no.

npm install prisma typescript tsx @types/node --save-dev
install prisma. --save-dev -> only in development
add the Prisma CLI as a development dependency to it:

Next, set up your Prisma ORM project by creating your Prisma Schema file with the following command:
npx prisma init

database: neonDB neon.tech -> free
create project there. and copy the link in .env

make model inside prisma/schema.prisma and run:
npx prisma migrate dev --name init

npm install @prisma/client
// make api/videos/route.ts and connect to db using prisma

postman: http://localhost:3000/api/videos at start, output: [] (empty array for starters)

now cloudinary
Using Cloudinary's upload capabilities, you can upload media assets in bulk with a variety of options for customizing how they will be uploaded.

Cloudinary docs: Guides, References, SDKs
npm install cloudinary

update the schema and run this query:
npx prisma migrate dev --name floatfix

Next Cloudinary -> drectly use cloudinary features in nextjs app like bg-remove.
npm install next-cloudinary
CldImage, CldVideoPlayer

for fetching data (other method than fetch)
npm i axios

float to human readable file size
npm i filesize

set time to relative time: eg-6 days ago
npm i dayjs

for icons
npm i lucide-react

preview from cloudinary
cloudinary.video("your_video_public_id", {
  effect: "preview:duration_12.0:max_seg_3:min_seg_dur_3.0"
});


# Future scope

provide srt file,
bg-remove,
find most imp part from AI, and make short video,
compress,
change type,
give 3 trials and then charge
#   c l o u d i n a r y - s a a s 
 
 
