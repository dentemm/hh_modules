from django.urls import path

from . import views

app_name = 'heatmap'

urlpatterns = [
  # path('', views.index, name='index')
  path('<int:pk>/', views.SingleItem.as_view(), name='detail'),
]