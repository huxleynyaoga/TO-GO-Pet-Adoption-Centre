from rest_framework.routers import DefaultRouter
from django.urls import path, include
from . import views

router = DefaultRouter()
router.register(r'pets', views.PetViewSet)
router.register(r'pet-health', views.PetHealthViewSet)
router.register(r'pet-behaviour', views.PetBehaviourViewSet)
router.register(r'pet-adoption', views.PetAdoptionViewSet)

urlpatterns = [
    path('', views.home, name='home'),
    path('api/', include(router.urls)),
]