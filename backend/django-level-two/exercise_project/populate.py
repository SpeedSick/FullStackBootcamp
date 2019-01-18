import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "exercise_project.settings")

import django

django.setup()

import random
from exercise_app.models import User

from faker import Faker

fakegen = Faker()

def populate(n=5):

    for _ in range(n):
        all = fakegen.name()

        first_name, last_name = all.split(' ')[0], all.split(' ')[1]

        email = fakegen.email()
        print(first_name + '!'+last_name + '!'+email)
        a = User.objects.get_or_create(first_name=first_name, last_name=last_name, email=email)[0]
        print(a)
        a.save()


if __name__ == '__main__':
    print('populating is started')
    populate(20)
    print('populating is finished')