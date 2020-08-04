# Generated by Django 3.0.9 on 2020-08-04 21:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20200803_2045'),
    ]

    operations = [
        migrations.AddField(
            model_name='forecast',
            name='humidity',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='forecast',
            name='tempMax',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='forecast',
            name='tempMin',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='forecast',
            name='temperature',
            field=models.FloatField(null=True),
        ),
    ]
