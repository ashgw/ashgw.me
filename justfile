alias h:= help
alias s:= setup
alias sv:= serve
alias svp:= serve-prod
alias t:= test
alias f:= format
alias l:= lint
alias b:= build
alias rn:= reincarnate
alias ng:= ngrok 

__CONTAINER_PORT := "3000"
EXPOSED_PORT := "3000"
NGROK_DOMAIN := "saved-duckling-subtle.ngrok-free.app"

@help:
    just --list

@setup:
    #!/bin/zsh
    source ~/.zshrc 
    nvm install 18.17.0 && nvm use 18.17.0
    pnpm i
    pnpm exec playwright install
    pnpm hooks


@serve:
    pnpm dev

@serve-prod:
    pnpm build 
    pnpm start 

@build:
    pnpm build 

@hooks:
    pnpm hooks 
    
@test:
    pnpm test

@lint:
    pnpm lint

@format:
    pnpm format

@deploy:
    echo 'this command is not set yet'

@u:
    docker compose -f deployment/compose.yaml up 
    
@d:
    docker compose -f deployment/compose.yaml down 

@ngrok:
    ngrok http --domain={{NGROK_DOMAIN}} {{EXPOSED_PORT}}

@patch:
    git add .
    npx changelogen@latest --release --push --patch 

@minor:
    git add .
    npx changelogen@latest --release --push --minor 

@major:
    git add .
    npx changelogen@latest --release --push --major 

@reincarnate:
    rm -rf node_modules
    rm -rf .next
    echo 'done cleaning up..'
    echo 'reincarnating..'
    just setup
