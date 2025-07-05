import { useAgent, useDatabase } from '@trust0/identus-react/hooks';
import { StorageType } from '@trust0/ridb';
import SDK from '@hyperledger/identus-sdk';

function IdentityWallet() {
  const { agent, start, stop, state } = useAgent();
  const { start: startDB, setSeed, setMediator } = useDatabase();

  const initializeWallet = async () => {
    // Initialize database
    await startDB({
      name: 'my-identity-wallet',
      storageType: StorageType.IndexDB,
      schemas: schemas
    });

    // Set wallet seed (generate or import)
    await setSeed(SDK.Domain.Seed.fromString('your-seed-here'));
    
    // Set mediator for message delivery
    await setMediator(SDK.Domain.DID.fromString('did:peer:mediator-did'));

    // Start the agent
    await start();
  };

  return (
    <div>
      <h2>Identity Wallet</h2>
      <p>Status: {state}</p>
      
      {state === 'stopped' && (
        <button onClick={initializeWallet}>
          Initialize Wallet
        </button>
      )}
      
      {state === 'running' && (
        <button onClick={stop}>
          Stop Agent
        </button>
      )}
    </div>
  );
}