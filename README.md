## Initial directory setup

1. Create directory called **todo**

```
mkdir todo
```

2. Clone rails backend project inside todo directory

```
https://github.com/mjesar/Rails-6-Todo-API
```

3. Clone react todo web app in same directory

```
https://github.com/mjesar/Todo-React-webapp
```

## Running projects

Now assuming you are in **todo-lab** directory

1. Install gems in backend

```
bundle install
```

2. setup database

```
rails db:migrate
```

3. Run backend

```
rails s
```

4. then run frontend app so it will choose its port 3001

```
npm install
```

5. Now open local app (http://localhost:3000) for backend

   and for frontend (http://localhost:3001)

6. To run all rspec tests

```
bundle exec rspec .
```
