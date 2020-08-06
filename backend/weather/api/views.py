import json
from django.http import HttpResponse
from django.shortcuts import render
import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ForecastSerializer

from .models import Forecast


@api_view(['GET'])
def apiOverview(request):
    city = "harlem"
    #url = "api.openweathermap.org/data/2.5/weather?q=Miami&appid=87747d91dbe41f823bd06eb6b53c65be"
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&units=imperial&appid=87747d91dbe41f823bd06eb6b53c65be"

    r = requests.get(url).json()

    city_weather = {
        'city': city,
        'temp': r['main']['temp'],
        'min temp': r['main']['temp_min'],
        'max temp': r['main']['temp_max'],
        'desc': r['weather'][0]['description'],
        'icon': r['weather'][0]['icon'],
    }

    context = {'city_weather': city_weather}
    return Response(city_weather)


@api_view(['GET'])
def forecastList(request):
    forecasts = Forecast.objects.all()
    serializer = ForecastSerializer(forecasts, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def forecastDetail(request, pk):
    forecasts = Forecast.objects.get(id=pk)
    serializer = ForecastSerializer(forecasts, many=False)
    return Response(serializer.data)
