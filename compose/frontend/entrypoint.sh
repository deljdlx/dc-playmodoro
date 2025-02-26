cd /src
npm install --legacy-peer-deps
npm run build
# start nginx
nginx -g "daemon off;"