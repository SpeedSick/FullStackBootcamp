from django.shortcuts import render
from exercise_app.models import User
from exercise_app.forms import UserForm

# Create your views here.


def hello(request):
    return render(request, 'exercise_project/index.html')


def userView(request):
    users = User.objects.all()
    content = {
        'users': users,
    }
    return render(request, 'exercise_app/index.html', context=content)


def user_form_view(request):
    if request.method == 'POST':

        form = UserForm(request.POST)
        if form.is_valid():

            new_user = User.objects.get_or_create(**form.cleaned_data)[0]

            new_user.save()

        return hello(request)

    return render(request, 'exercise_app/user_form_page.html', {'form': UserForm})
