# TODO-list

## Requirements

- Python 3.9

## Usage

> URL: [http://127.0.0.1:5000](http://127.0.0.1:5000)

### pipenv

- Install dependency
`> pipenv install`

- Set environment variables
`> export FLASK_APP=main.py`

- Database migration
`> flask db init`
`> flask db migrate`
`> flask db upgrade`

- Run server
`> flask run --host 0.0.0.0 --port 5000`

### Docker

- Build image
`> docker build -t todo-list .`

- Run image
`> docker run -p 5000:5000 todo-list`

## Testing

- Set environment variables
`> export FLASK_APP=main.py`

- Run testing
`flask test`
