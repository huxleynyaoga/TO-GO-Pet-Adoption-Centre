from django.shortcuts import render, HttpResponse
#from datetime import date

def home(request):
    return HttpResponse ("Welcome To The Pet Adoption Website.")
