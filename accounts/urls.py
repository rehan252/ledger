from django.conf.urls import url
from django.urls import path, include
from .api import AccountListApi, AccountDetailApi

urlpatterns = [
      path('', AccountListApi.as_view()),
      path('api/<int:pk>/', AccountDetailApi.as_view()),
]
