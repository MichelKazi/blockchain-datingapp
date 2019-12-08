#include <eosio/eosio.hpp>
#include <eosio/system.hpp>

using namespace eosio;

// Smart Contract Name: heartchain
// Table struct:
//   notestruct: multi index table to store the notes
//     prim_key(uint64): primary key
//     user(name): account name for the user
//     note(string): the note message
//     timestamp(uint64): the store the last update block time
// Public method:
//   isnewuser => to check if the given account name has note in table or not
// Public actions:
//   update => put the note into the multi-index table and sign by the given account

// Replace the contract class name when you start your own project
CONTRACT heartchain : public eosio::contract {
  private:
    bool isnewuser( name user ) {
      // get notes by using secondary key
      auto note_index = _notes.get_index<name("getbyuser")>();
      auto note_iterator = note_index.find(user.value);

      return note_iterator == note_index.end();
    }

//    TABLE notestruct {
//      uint64_t         prim_key;  // primary key
//      name             user;      // account name for the user
//      std::string      note;      // the note message
//      block_timestamp  timestamp; // the store the last update block time
//
      // primary key
//      auto primary_key() const { return prim_key; }
      // secondary key
      // only supports uint64_t, uint128_t, uint256_t, double or long double
//      uint64_t get_by_user() const { return user.value; }
//    };

    // create a multi-index table and support secondary key
//    typedef eosio::multi_index< name("notestruct"), notestruct,
//      indexed_by< name("getbyuser"), const_mem_fun<notestruct, uint64_t, &notestruct::get_by_user> >
//      > note_table;
//
//    note_table _notes;
//
  public:
    using contract::contract;

    // constructor
    heartchain( name receiver, name code, datastream<const char*> ds ):
                contract( receiver, code, ds ),
                _notes( receiver, receiver.value ) {}

    ACTION update( name user, std::string& note ) {
      // to sign the action with the given account
      require_auth( user );

			// this is where the script of the smart contract we make would go??
			// This "update" action should just return a variable that will show up as a unit of "love"
			//

    }

};

// specify the contract name, and export a public action: update
EOSIO_DISPATCH( heartchain, (update) )

