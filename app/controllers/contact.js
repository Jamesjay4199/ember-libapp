import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
    responseMessage:'',
    message: '',
    emailAddress:'',
    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isMessageLongEnough: Ember.computed.gte('message.length', 5),
    allGood:Ember.computed.and('isValid', 'isMessageLongEnough'),
    isDisabled: Ember.computed.not('allGood'),

    actions:{
        sendMessage(){
            alert(`${this.get('emailAddress')} is sending us ${this.get('message')}`);
            var email = this.get('emailAddress');
            var message = this.get('message');
            const contactMsg = this.store.createRecord('contact',{email:email, message:message});
            contactMsg.save().then((response)=>{
                this.set('responseMessage', 'Message was sent successfully');

                this.set('message', '');
                this.set('emailAddress', '');
            });
        }
    }
});
