from rest_framework import serializers
from .models import Pet, PetAppearnace, PetHealth, PetBehaviour, PetAdoption

class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = '__all__'

class PetAppearanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = PetAppearnace
        fields = '__all__'

class PetHealthSerializer(serializers.ModelSerializer):
    class Meta:
        model = PetHealth
        fields = '__all__'

class PetBehaviourSerializer(serializers.ModelSerializer):
    class Meta:
        model = PetBehaviour
        fields = '__all__'

class PetAdoptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PetAdoption
        fields = '__all__'

class PetDetailSerializer(serializers.ModelSerializer):
    appearance = PetAppearanceSerializer(source='petappearnace_set', many=True)
    health = PetHealthSerializer(source='pethealth_set', many=True)
    behaviour = PetBehaviourSerializer(source='petbehaviour_set', many=True)
    adoption = PetAdoptionSerializer(source='petadoption_set', many=True)

    class Meta:
        model = Pet
        fields = '__all__'