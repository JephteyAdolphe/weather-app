from django.db import models


class Forecast(models.Model):
    location = models.CharField(max_length=120, null=True)
    temperature = models.FloatField(null=True)
    tempMin = models.FloatField(null=True)
    tempMax = models.FloatField(null=True)
    humidity = models.FloatField(null=True)

    def __str__(self):
        return self.location
