## Задача на алгоритмы

  От вас требуется создать два класса, которые помогут нам в планировании работы

## Класс Task

  Task - задача - это простая функция конструктор, который принимает два аргумента - строку и число. Строка будет записана в поле title объекта, число - в поле storyPoints.

## Класс Agile

  Agile содержит поле backlog - массив, который хранит все добавленные задачи, и три метода

### Метод addTask

Принимает на вход задачу (Task), добавляет ее в конец массива backlog

### Метод addUrgentTask
  Позволяет добавлять срочные задачи
  Принимает на вход задачу (Task), добавляет ее в начало массива 

### Метод getSprint
  Ключевой метод объекта. Принимает на вход количество очков сложности (storyPoints), которое команда готова сделать в этом отрезке. Пытается набрать максимальное количество задач, начиная от начала беклога. Пропустит задачу, если она стоит дороже чем оставшиеся storyPoints. Суммарная сложность задач, которые мы набираем в спринт должна быть равна или меньше передданому числу.

Посмотреть задание можно по [ссылке](https://shyliaievoleg.github.io/yandex-yasli-agile/).



