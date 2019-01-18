from django.conf.urls import url
from exercise_app.views import userView

urlpatterns = [
    url(r'^$', userView),
]