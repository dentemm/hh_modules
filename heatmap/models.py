from django.db import models

# Create your models here.
class Heatmap(models.Model):

  image = models.ImageField(upload_to='images/heatmap')
