from django.urls import path
from .views import *

app_name = 'generate'

urlpatterns = [
	path('',home,name='home'),
]