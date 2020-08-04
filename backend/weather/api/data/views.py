from rest_framework.generics import ListAPIView, RetrieveAPIView
from ..models import Forecast
from .serializers import WeatherSerializer


class WeatherListView(ListAPIView):
    queryset = Forecast.objects.all()
    serializer_class = WeatherSerializer


class WeatherDetailView(RetrieveAPIView):
    queryset = Forecast.objects.all()
    serializer_class = WeatherSerializer
