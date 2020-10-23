from .base import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ['SECRET_KEY']

ALLOWED_HOSTS = ['localhost', '127.0.0.1', '.aws.amazon.com', '.herokuapp.com']


import dj_database_url
DATABASES = { 'default': dj_database_url.config() }

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
