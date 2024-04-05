# Issue доска
Проект представляет собой реализацию Issue доски. Доска имеет в себе такие возможности, как:
* Добавление, удаление и редактирование названия столбцов.
* Добавление задач в первый столбец через модальное окно.
* Удаление и перемещение задач по столбцам через функциональные кнопки.
* Редактирование и просмотр задачи через модальное окно.
* Просмотр истории перемещения отдельных задач в модальном окне.

___Инструкция по использованию___:
__Добавление задач:__
Добавление задач реализуется путём нажатия на кнопку "+ Добавить задачу" в первом столбце. После её нажатия вылезет модальное окно, в котором можно описать созданную задачу. _Столбцы могут содержать в себе неограниченное количество задач._

__Удаление и перемещение задач:__
На задачах существует 3 кнопки: кнопка в правом верхнем углу отвечает за безвозвратное удаление задачи, а кнопки слева и справа - за перемещение налево и направо по столбцам соответственно.

__Редактирование и просмотр задачи:__
Редактирование и просмотр задачи реализуется через модальное окно: нужно навестись курсором на центр задачи и нажать ЛКМ, после чего выйдет модальное окно с input полем для описания выбранной задачи.

__Просмотр истории перемещения задач:__
Просмотр и перемещение реализуется через модальное окно. При открытии модального окна можно увидеть форму с историей перемещения в правой части экрана.

__Добавление, удаление и редактирование столбцов:__
Добавление столбцов реализуется путём нажатия кнопки "Добавить столбец" в верхней части экрана. _Столбцов может быть неограниченное количество, появляются без названия._  Удалить определенный столбец можно путём нажатия кнопки "Удалить" в зоне определенного столбца. _Удаление будет безвозвратным._ Редактировать название столбца можно путём нажатия на название столбца и дальнейшего изменения данного поля.


___Рекомендации по запуску___:
Необходимо написать в терминале ```npm run start``` для запуска проекта.