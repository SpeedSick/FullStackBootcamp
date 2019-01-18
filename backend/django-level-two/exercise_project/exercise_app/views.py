from django.shortcuts import render
from exercise_app.models import User

# Create your views here.


def hello(request):
    return render(request, 'exercise_project/index.html')


def userView(request):
    users = User.objects.all()
    content = {
        'users': users,
    }
    return render(request, 'exercise_app/index.html', context=content)
