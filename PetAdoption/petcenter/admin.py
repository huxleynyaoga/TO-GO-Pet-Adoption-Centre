from django.contrib import admin
from .models import * 


class PetAdmin(admin.ModelAdmin):
    list_display = ["name", "age", "species", "breed", "gender", "size", 'description']
    list_filter = ["breed"]
    search_fields = ["name"]
    
    
# class PetAppearnaceAdmin(admin.ModelAdmin):
#     list_display = ["pet", "color", "weight"]
    
    
class PetHealthAdmin(admin.ModelAdmin):
    list_display = ["pet", "vaccinated", "neutered", "dewormed", "special_needs"]
    

class PetBehaviourAdmin(admin.ModelAdmin):
    list_display = ["pet", "temperament", "activity_level", "compatibility"]
    

class PetAdoptionAdmin(admin.ModelAdmin):
    list_display = ["pet", "availability", "adoption_fee", "location"]
    
    
admin.site.register(Pet, PetAdmin)
# admin.site.register(PetAppearnace, PetAppearnaceAdmin)
admin.site.register(PetHealth, PetHealthAdmin)
admin.site.register(PetBehaviour, PetBehaviourAdmin)
admin.site.register(PetAdoption, PetAdoptionAdmin)