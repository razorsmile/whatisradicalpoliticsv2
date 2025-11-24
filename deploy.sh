#!/bin/bash
# Deploy script for What is Radical Politics v2
# Deploys to systemdecomposition.org/wirpv2/

set -e  # Exit on any error

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuration
BASE_URL="/wirpv2/"
DESTINATION="/var/www/systemdecomposition.org/wirpv2/"
BACKUP_DIR="/home/valentine/backups/wirpv2"

echo -e "${YELLOW}=== What is Radical Politics v2 - Deployment ===${NC}"
echo ""

# Check if we're in the right directory
if [ ! -f "config.toml" ]; then
    echo -e "${RED}Error: Not in Hugo project directory${NC}"
    echo "Please run this script from /home/valentine/radicalpoliticsv2/"
    exit 1
fi

# Check if destination exists
if [ ! -d "$DESTINATION" ]; then
    echo -e "${RED}Error: Destination directory does not exist: $DESTINATION${NC}"
    exit 1
fi

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Create backup of current production site
echo -e "${YELLOW}Creating backup of current production site...${NC}"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/backup_$TIMESTAMP.tar.gz"

if [ -d "$DESTINATION" ] && [ "$(ls -A $DESTINATION)" ]; then
    tar -czf "$BACKUP_FILE" -C "$DESTINATION" .
    echo -e "${GREEN}✓ Backup created: $BACKUP_FILE${NC}"
else
    echo -e "${YELLOW}⚠ Destination is empty, skipping backup${NC}"
fi

# Clean up old backups (keep last 5)
echo -e "${YELLOW}Cleaning up old backups (keeping last 5)...${NC}"
cd "$BACKUP_DIR"
ls -t backup_*.tar.gz 2>/dev/null | tail -n +6 | xargs -r rm
BACKUP_COUNT=$(ls -1 backup_*.tar.gz 2>/dev/null | wc -l)
echo -e "${GREEN}✓ $BACKUP_COUNT backups retained${NC}"
cd - > /dev/null

# Clean previous build
echo -e "${YELLOW}Cleaning previous build...${NC}"
rm -rf public resources .hugo_build.lock
echo -e "${GREEN}✓ Clean complete${NC}"

# Build the site
echo -e "${YELLOW}Building site with Hugo...${NC}"
hugo --baseURL "$BASE_URL" --destination "$DESTINATION"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Build successful${NC}"
else
    echo -e "${RED}✗ Build failed${NC}"
    exit 1
fi

# Verify deployment
echo -e "${YELLOW}Verifying deployment...${NC}"
if [ -f "$DESTINATION/index.html" ]; then
    echo -e "${GREEN}✓ Deployment verified - index.html exists${NC}"
else
    echo -e "${RED}✗ Deployment verification failed - index.html not found${NC}"
    exit 1
fi

# Show file count
FILE_COUNT=$(find "$DESTINATION" -type f | wc -l)
echo -e "${GREEN}✓ Deployed $FILE_COUNT files to production${NC}"

echo ""
echo -e "${GREEN}=== Deployment Complete ===${NC}"
echo -e "Site URL: ${GREEN}https://systemdecomposition.org/wirpv2/${NC}"
echo -e "Backup: ${GREEN}$BACKUP_FILE${NC}"
echo ""
echo "To test the site:"
echo "  curl -I https://systemdecomposition.org/wirpv2/"
echo ""
echo "To restore from backup if needed:"
echo "  tar -xzf $BACKUP_FILE -C $DESTINATION"
