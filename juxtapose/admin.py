from django.contrib import admin

# Register your models here.
from .models import JuxtaposeData

class JuxtaposeAdmin(admin.ModelAdmin):
  fields = ['image1', 'image2']

admin.site.register(JuxtaposeData, JuxtaposeAdmin)
