# online-chatting

## inside /server
run `npm install` to install all dependencies.<br>
create a new postgres database by any means. (leave it empty for now)<br>
create a new `.env` file according to the `.env.example` file.<br>
run `npx prisma migrate reset` to apply all the migrations to your database.<br>
additionally you can run `npx prisma studio` to see an overview of your database on your browser.<br>
run `npm run dev` to make your server go live.

## inside /web
run `npm install` to install all dependencies.<br>
run `npm start` to make your website go live.
