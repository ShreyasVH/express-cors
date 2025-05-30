if ! lsof -i :$PORT > /dev/null; then
    echo "Starting"
    npm run dev > server.log 2>&1 &
fi