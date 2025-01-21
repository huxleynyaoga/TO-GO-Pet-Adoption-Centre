from django.db import models

#Pet
class Pet(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female')
    ]
    SIZE_CHOICES = [
        ('S', 'Small'),
        ('M', 'Medium'),
        ('L', 'Large'),
    ]
    name = models.CharField(max_length=50)
    age = models.PositiveSmallIntegerField()
    species = models.CharField(max_length=50)
    breed = models.CharField(max_length=50)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    size = models.CharField(max_length=1, choices=SIZE_CHOICES)
    
    def __str__(self):
        return self.name
        #return f'{self.name} - {self.species} - {self.breed}'
    
    

#Pet Appearance 
class PetAppearnace(models.Model):
    pet = models.ForeignKey(Pet, on_delete=models.CASCADE)
    color = models.CharField(max_length=50)
    weight = models.PositiveSmallIntegerField()
    photos = models.ImageField(upload_to='pets/')
    
    def __str__(self):
        return f'{self.pet} - {self.color}'
    
    
#Pet Health Information
class PetHealth(models.Model):
    pet = models.ForeignKey(Pet, on_delete=models.CASCADE)
    vaccinated = models.BooleanField(default=False)
    neutered = models.BooleanField(default=False)
    dewormed = models.BooleanField(default=False)
    special_needs = models.CharField(max_length=250, null=True, blank=True)
    
    def __str__(self):
        return f'{self.pet} - {self.vaccinated}'
    
    
# Pet Personality / Behaviour
class PetBehaviour(models.Model):
    ACTIVITY_CHOICES = [
        ('HIGH', 'High'),
        ('MODERATE', 'Moderate'),
        ('LOW', 'Low'),
    ]
    pet = models.ForeignKey(Pet, on_delete=models.CASCADE)
    temperament = models.CharField(max_length=75)
    activity_level = models.CharField(max_length=20, choices=ACTIVITY_CHOICES)
    compatibility = models.CharField(max_length=75)
    
    def __str__(self):
        return f'{self.pet} - {self.temperament}'
    
    
# Pet Location & Adoption Details
class PetAdoption(models.Model):
    AVAILABILITY_CHOICES = [
        ('A', 'Available'),
        ('R', 'Reserved')
    ]
    pet = models.ForeignKey(Pet, on_delete=models.CASCADE)
    location = models.CharField(max_length=75)
    adoption_fee = models.DecimalField(max_digits=13, decimal_places=2)
    availability = models.CharField(max_length=1, choices=AVAILABILITY_CHOICES)
    
    def __str__(self):
        return f'{self.pet} - {self.availability}'
