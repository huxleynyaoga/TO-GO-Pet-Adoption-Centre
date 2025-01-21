from django.contrib import admin
from .models import * 

admin.site.register(Pet)
admin.site.register(PetAppearnace)
admin.site.register(PetHealth)
admin.site.register(PetBehaviour)
admin.site.register(PetAdoption)