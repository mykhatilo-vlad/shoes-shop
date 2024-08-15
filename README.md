Щоб почати 
```sh
git clone https://github.com/mykhatilo-vlad/shoes-shop
```

Налаштуй локального юзера
```sh
git config --global user.email {YOUR_EMAIL}
```
```sh
git config --global user.name {YOUR_NAME_OR_NIKNAME}
```

Створити вітку (branch)
```sh
git branch {BRANCH_NAME}
```
Наприклад
```sh
git branch header
```

Переключитись на вітку
```sh
git checkout header
```

переглянути змінені файли
```sh
git status
```

додати файли до коміту. Крапка означає додати всі файли.
```sh
git add {PATH_TO_FILE} or .
```

додати коміт
```sh
git commit -m "your commit"
```

запушити в гітхаб репозиторій. можей вказати твою вітку або основну. Якщо основну то відбудеться злиття твоєї та основної. Зазвичай вказують активну вітку а потім роблять pull request.
```sh
git push origin {BRANCH_NAME}
```

Коли додаєш коміт до main або робиш злиття із main, відбувається генерація сторінки із змінами і ти можеш переглянути сайт онлайн. [https://mykhatilo-vlad.github.io/shoes-shop/](https://mykhatilo-vlad.github.io/shoes-shop/)
