.PHONY: start-dev
start-dev:
	docker compose -f backend/docker-compose.dev.yml up -d --build

.PHONY: build-prod
build-prod:
	docker compose -f frontend/docker-compose.yml up -d --build

.PHONY: export
export:
	docker exec -it strapi sh -c "cd /opt/app && npm run strapi export -- --file ./data/latest --key strapijamstack"

.PHONY: import
import:
	docker exec -it strapi sh -c "cd /opt/app && npm run strapi import -- --file ./data/latest.tar.gz.enc --key strapijamstack"