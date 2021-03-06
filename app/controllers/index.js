import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
    headerMessage: 'Coming Soon',
    responseMessage: '',
    emailAddress: '',

    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),
    
    actions:{
        saveInvitation(){
            const email = this.get('emailAddress');

            const newInvitation = this.store.createRecord('invitation', {email:email});
            newInvitation.save().then((response)=>{
                this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
                this.set('emailAddress', '');
            });

        }
    }

});