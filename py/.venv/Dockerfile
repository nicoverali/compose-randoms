FROM python:alpine

WORKDIR /app
ENV PORT=80

COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . .
CMD python -m flask --app app run --host 0.0.0.0 --port $PORT