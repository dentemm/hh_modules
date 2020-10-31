from django.contrib import admin

# Register your models here.
from .models import Heatmap

class HeatmapAdmin(admin.ModelAdmin):
  fiels = ['image']

admin.site.register(Heatmap, HeatmapAdmin)