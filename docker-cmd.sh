name=hearts-postgres-prod
port=5433
docker run --name "$name" -e POSTGRES_USER=ubuntu -e POSTGRES_PASSWORD=password -e POSTGRES_DB=hearts -p "$port":5432 -d postgres
sleep 10 # wait for the file /var/lib/postgresql/data/pg_hba.conf
docker exec -it "$name" sed -i "$ i host all ubuntu all trust" /var/lib/postgresql/data/pg_hba.conf
docker exec -it "$name" psql -U ubuntu -d hearts -c "alter role ubuntu password null;"
docker container restart $name
