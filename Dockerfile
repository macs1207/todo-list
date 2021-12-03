FROM python:3.9.9-buster

RUN apt-get update && apt-get install -y

RUN mkdir -p /home/todo-list
WORKDIR /home/todo-list

RUN mkdir -p /home/todo-list/app
COPY app /home/todo-list/app
COPY main.py /home/todo-list
COPY Pipfile /home/todo-list
COPY Pipfile.lock /home/todo-list

RUN python -m pip install pipenv
RUN pipenv install --system --deploy --ignore-pipfile
ENV FLASK_APP=main.py

RUN flask db init
RUN flask db migrate
RUN flask db upgrade

CMD ["flask", "run", "--host", "0.0.0.0", "--port", "5000"]