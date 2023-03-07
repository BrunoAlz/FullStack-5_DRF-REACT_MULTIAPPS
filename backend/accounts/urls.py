from django.urls import path
from .views import UserCreate, UserDetail

urlpatterns = [
    path('create/', UserCreate.as_view(), name='user-create'),
    path('user/<int:pk>/', UserDetail.as_view(), name='user-detail'),
]
