# Стартовый проект с gulp 

В Windows установку пакетов (`npm i`) нужно выполять в терминале, запущенном от имени администратора.

---

## Как начать новый проект c этим репозиторием

1. Клонировать этот репозиторий в новую папку (`git clone https://github.com/Leon78ak/start-project.git new-project`, см. шпаргалку) и зайти в неё (`cd new-project`).
2. Стереть историю разработки этого репозитория (`rm -rf .git`), инициировать новый (`git init`), создать удалённый репозиторий и привязать его (`git remote add origin АДРЕС`).
3. Отредактировать README.md, `package.json` (название проекта, автор, лицензия, сторонние пакеты и пр.) и `content.json`.
4. Установить зависимости (`npm i`).
5. Запустить сервер разработки (`gulp`).
6. если слетел gulp установить (`npm install gulpjs/gulp#4.0 --save-dev`)

