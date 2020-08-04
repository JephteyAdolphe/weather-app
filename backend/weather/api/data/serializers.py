from rest_framework import serializers
from ..models import Forecast


class WeatherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Forecast
        fields = ('location', 'temperature', 'min temp', 'max temp', 'humidity')