from django.shortcuts import render

from rest_framework import viewsets, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import *
from .serializers import (
    PetSerializer, 
    PetDetailSerializer, 
    PetHealthSerializer, 
    PetBehaviourSerializer, 
    PetAdoptionSerializer
)

class PetViewSet(viewsets.ModelViewSet):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['species', 'breed', 'gender', 'size']
    search_fields = ['name', 'species', 'breed']

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return PetDetailSerializer
        return PetSerializer

    @action(detail=False, methods=['get'])
    def available(self):
        available_pets = Pet.objects.filter(petadoption__availability='A')
        serializer = self.get_serializer(available_pets, many=True)
        return Response(serializer.data)

class PetHealthViewSet(viewsets.ModelViewSet):
    queryset = PetHealth.objects.all()
    serializer_class = PetHealthSerializer
    filterset_fields = ['vaccinated', 'neutered', 'dewormed']

class PetBehaviourViewSet(viewsets.ModelViewSet):
    queryset = PetBehaviour.objects.all()
    serializer_class = PetBehaviourSerializer
    filterset_fields = ['activity_level']

class PetAdoptionViewSet(viewsets.ModelViewSet):
    queryset = PetAdoption.objects.all()
    serializer_class = PetAdoptionSerializer
    filterset_fields = ['availability']


def home(request):
    return render(request, 'home.html')
    