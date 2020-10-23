from django.db import models

# Create your models here.
class JuxtaposeData(models.Model):

  image1 = models.ImageField(upload_to='images/juxtapose')
  image2 = models.ImageField(upload_to='images/juxtapose')