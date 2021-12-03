# TODO-list

## Requirements

- Python 3.9

## API Documentation

[Postman documentation](https://documenter.getpostman.com/view/6932425/UVJfkbKV)

## Usage

> URL: [http://127.0.0.1:5000](http://127.0.0.1:5000)

### pipenv

- Install dependency

```bash
> pipenv install
```

- Set environment variables

```bash
> export FLASK_APP=main.py
```

- Database migration

```bash
> flask db init
```

```bash
> flask db migrate
```

```bash
> flask db upgrade
```

- Run server

```bash
> flask run --host 0.0.0.0 --port 5000
```

### Docker

- Build image

```bash
> docker build -t todo-list .
```

- Run image

```bash
> docker run -p 5000:5000 todo-list
```

## Testing

- Set environment variables

```bash
> export FLASK_APP=main.py
```

- Run testing

```bash
> flask test
```
